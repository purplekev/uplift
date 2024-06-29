from pocketbase import PocketBase

pb = PocketBase('http://127.0.0.1:8090')


def _end_workout():
    user = pb.collection("users").get_first_list_item('username="asghjklzxcvbnm"')
    curr_xp = user.curr_xp + 10
    level = user.level
    if curr_xp >= user.target_xp:
        curr_xp -= user.target_xp
        level += 1

    data = {
        "username": user.username,
        "emailVisibility": user.emailVisibility,
        "password": user.password,
        "passwordConfirm": user.password,
        "oldPassword": user.password,
        "name": user.name,
        "curr_xp": curr_xp,
        "target_xp": user.target_xp,
        "weight_lifted": user.weight_lifted,
        "level": level
    }
    pb.collection('users').update(user.id, data)

    ret = {
        'curr_xp': curr_xp,
        'target_xp': user.target_xp,
        'level': level
    }
    return ret


def add_exercise_to_workout(workout_id, exercise):
    pass


def add_set_to_workout(workout_id, reps, weight):
    pass


# do we need this?
def save_workout_routine(username, exercises):
    pass
