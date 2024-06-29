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
        "curr_xp": 123,
        "target_xp": 123
    }
    print("CREATING USER WITH THE DATA:", data)
 
    try:
        user = pb.collection("users").create(data)
        hi = pb.collection('users').get_list()

        print('sacks')
        print(hi)

        return {'user_id': user.id}, 200
    except Exception as e:
        print(f"Error creating user: {str(e)}")  # Print the error to the console for debugging
        return {'error': str(e)}, 500


def user_level_up(username, level):
    pass


def user_stat():
    user = pb.collection("users").get_first_list_item('username="asghjklzxcvbnm"')
    return {'username': user.username}
