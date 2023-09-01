# MovieLand - Movie Search App (UI)
![Screenshot from 2023-09-01 16-58-40](https://github.com/CodeWithMuzzu/movieswebsite_react/assets/122872433/755fdd0c-84d1-421d-81e6-27360163c038)
MovieLand is a simple React application that allows you to search for movies using the OMDB API and display the results in a visually appealing way. This project is open for contributions, and this README will guide you through the process of forking and cloning the repository, setting up the development environment, and contributing to the project.

# Features
Search for movies by title.
Display movie results with their titles, release years, and posters.
Handle cases where no movies are found for a given search.
# Getting Started
To get started with MovieLand and contribute to the project, follow these steps:

# Prerequisites
You'll need the following tools and technologies installed on your machine:

1. Node.js (v14 or higher)
1. npm (Node Package Manager)
1. Git

# Fork the Repository
Fork the [MovieLand](https://github.com/CodeWithMuzzu/movieswebsite_react) repository by clicking the "Fork" button on the top-right corner of the GitHub page. This will create a copy of the project in your GitHub account.
# Clone the Repository
Clone your forked repository to your local machine. Replace your-username with your GitHub username:
bash
```
git clone https://github.com/your-username/MovieLand.git
```
# Install Dependencies
1. Change into the project directory:
```
cd MovieLand
```
1. Install the project dependencies using npm:
```
npm install
```
# API Key Setup
1. Obtain an OMDB API key by visiting [OMDb API](https://www.omdbapi.com/apikey.aspx) and sign up for a free or premium key.

1. Create a .env file in the root directory of the project and add your API key:

```
REACT_APP_OMDB_API_KEY=your-api-key-goes-here
```
# Start the Development Server
Start the development server:
```
npm start
```
This will run the app in development mode. You can access it in your browser at 
```
http://localhost:3000
```

Making Contributions
Once you've made changes or enhancements, create a new branch for your feature or bug and feel free to raise a pull request.
