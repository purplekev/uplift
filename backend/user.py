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
        "target_xp": 50,
        "level": 1,
    }

    try:
        user = pb.collection("users").create(data)
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


def user_stat():
    user = pb.collection("users").get_first_list_item('username="test1"')
    ret = {
        "username": user.username,
        "email": user.email,
        "name": user.name,
        "curr_xp": user.curr_xp,
        "target_xp": user.target_xp,
        "level": user.level
    }

    return ret
