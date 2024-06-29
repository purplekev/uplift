from flask import jsonify
from pocketbase import PocketBase
from user import user_level_up
import datetime
import random

pb = PocketBase('http://127.0.0.1:8090')


# def start_workout(username):
#     pass


# def add_exercise_to_workout(workout_id, exercise):
#     pass


# def add_set_to_workout(workout_id, reps, weight):
#     pass

def end_workout(username, exercises):
    user = pb.collection("users").get_first_list_item(f'username="{username}"')
    user_id = user['user_id']
    date = datetime.datetime.now().isoformat()

    workout_entry = {
        'user_id': user_id,
        'exercises': exercises,
        'date': date,
    }
    workout = pb.collection("workouts").create(workout_entry)
    workout_id = workout['id']

    add_xp = random.randint(1, 5)
    user_level_up(username, add_xp)

    clans = pb.collection("clans").get_full_list()
    user_clan = None
    for clan in clans:
        if user_id in clan['members']:
            user_clan = clan
            break

    if user_clan:
        clan_level_up(add_xp, user_clan['name'])

    workout_count = pb.collection("workouts").count(f'user_id="{user_id}"')
    return {'message': f'Workout #{workout_count}'}
