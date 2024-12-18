## Cricket website with react js

Here is the live Link

# [https://classroom.github.com/a/8giEjBQc](https://classroom.github.com/a/8giEjBQc)

## Technologies used

- React Js
- Tailwind CSS
- Daisyui
- React Icons
- Prop-types
- React-Toastify

This assignment involves building a React-based application where users can select and manage cricket players for a team, following the design from Figma. Handle player selection, coin limitations, and complete the system following the requirements written below:

---

### Navbar

- Display the user's money in the Navbar, initially it will be 0.

### Banner

- Everytime On clicking the button, the user's coin will increase so that user can buy player.

### Player Data

- Create a JSON file for 15 players, each having information like playerId, name, country, image, role, batting/bowling type, and bidding price.

### Choose Player Functionality

- on Click "Choose Player" button , check if user have available coin or not.
- show an alert if user dont have available coin.
- Otherwise, add the player to the selected players list.

### Challenges

- **Use React-Toastify**:
  Replace all alerts in the interface with `React-Toastify` for better user notifications.

- **Implement Selected Player Remove Functionality**:
  Add a "Remove" button to each selected player card. On click, the player should be removed from the selected players' section.

  - **Implement The Perfect Validation on Player selection**:
    - on clicking choose, player, if player selected previously then show user an alert(player already selected) and terminate.
    - if the selected player is already 6 then , show an alert and terminate
