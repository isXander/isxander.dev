# Bonobocraft

Bonobocraft is a commission I worked on for [ChrisDaCow](https://youtube.com/@ChrisDaCow) where he taught real apes to play Minecraft. My contribution was the mod that added touch controls so the bonobos could control the game.

# A technical deep-dive

Bonobocraft is quite a simple mod at its roots: it enables the mouse whilst in-game and implements some simple touch-zones that you can click on. But as you dive deeper, a lot more is going on behind the scenes to make the experience truely intuitive for the bonobos.

## Table of Contents

- [Bonobocraft](#bonobocraft)
- [A technical deep-dive](#a-technical-deep-dive)
  - [Table of Contents](#table-of-contents)
  - [Input](#input)
    - [Touch Look](#touch-look)
    - [Touch Walk](#touch-walk)
    - [Button Row](#button-row)
  - [Systems](#systems)
    - [Auto Player Task](#auto-player-task)

## Input

### Touch Look

8 touch zones around the edge of the screen move the player camera in each direction.

|           |      |            |
| --------- | ---- | ---------- |
| Up+Left   | Up   | Up+Right   |
| Left      | ---  | Right      |
| Down+Left | Down | Down+Right |

This behaviour is almost what the Bonobos expect. Their primitive brains just touch what they want to look at. I could have implemented this, but the researchers decided it would be more cognitively challenging if they were to learn these more basic controls.

After a certain period of time, the pitch of the player is re-centered to something just below straight forward (to avoid looking into Enderman's eyes). This is to help the Bonobos in case they get stuck looking up, it also makes the video more interesting.

### Touch Walk

The middle [sector of the screen](#touch-look) is used for walking forward. Upon pressing, the 'W' key will be emulated for a second or so.

This behaviour is already familiar to the Bonobos, who have done screen tasks like this in the past.

### Button Row

At the top center of the screen, a row of buttons (or [lexigrams](https://www.apeinitiative.org/lexigrams)) are visible which do various actions.

Throughout the development of Bonobocraft, many buttons have been made, but at it's final state, only 3 are ever shown/enabled:

| Button | Action                                        | Lexigram             | Narration  |
| ------ | --------------------------------------------- | -------------------- | ---------- |
| Eat    | [Auto player task](#auto-player-task): Eat    | insert lexigram here | `"eat"`    |
| Share  | [Auto player task](#auto-player-task): Share  | insert lexigram here | `"share"`  |
| Clutch | [Auto player task](#auto-player-task): Clutch | insert lexigram here | `"clutch"` |

## Systems

### Auto Player Task
