from flask import jsonify
from pocketbase import PocketBase

pb = PocketBase('http://127.0.0.1:8090')


def create_user(username, email, password):
    data = {
        "username": username,
        "email": email,
        "emailVisibility": True,
        "password": password,
        "passwordConfirm": password,
        "name": "test_name",
        "curr_xp": 0,
        "target_xp": 5,
        "level": 1,
    }
    print("CREATING USER WITH THE DATA:", data)
 
    try:
        user = pb.collection("users").create(data)
        print(user)
        return {'message': f'User {data["username"]} created successfully with ID'}, 200 
    except Exception as e:
        print(f"Error creating user: {str(e)}")  # Print the error to the console for debugging
        return {'error': str(e)}, 500


def user_level_up(username, add_xp):
    user = pb.collection("users").get_first_list_item(f'username="{username}"')
    if not user:
        return {'error': 'User not found'}, 404

    user['curr_xp'] += add_xp
        
    if user['curr_xp'] >= user['target_xp']:
        user['curr_xp'] -= user['target_xp']  # Reset current XP
        user['level'] += 1  # Increment level
        user['target_xp'] *= 1.5  # Increase the target XP for the next level
        
        # Call the reward function if needed
        # reward_user(username, user['level'])

    updated_user = pb.collection("users").update(user['id'], user)
    return {'message': f'User {username} leveled up successfully to level {user["level"]}'}, 200
    


def get_user_stats(username):
    user = pb.collection("users").get_first_list_item(f'username="{username}"')
        if not user:
            return {'error': 'User not found'}, 404
        
        user_id = user['id']
        workouts = pb.collection("workouts").get_full_list(filter=f'user_id="{user_id}"')
        
        stats = {
            'username': user['username'],
            'email': user['email'],
            'curr_xp': user['curr_xp'],
            'target_xp': user['target_xp'],
            'level': user['level'],
            'workouts': []
        }
        for workout in workouts:
            workout_entry = {
                'workout_id': workout['id'],
                'exercises': workout['exercises'],
                'date': workout['date'],
            }
        stats['workouts'].append(workout_entry)
    return jsonify(stats)