import React, { useState } from "react";
import { TextField, Box, List, ListItem, Paper, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

const API_KEY = "8ea4bfb"; // Replace with your OMDB API key

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`);
      const data = await response.json();
      if (data.Search) {
        setSuggestions(data.Search.slice(0, 5));
      } else {
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <Box className="search-bar" sx={{ position: "relative", marginBottom: 3 }}>
      <TextField
        label="Search for movies..."
        variant="outlined"
        fullWidth
        value={query}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <Paper
          className="suggestions"
          elevation={3}
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            zIndex: 10,
          }}
        >
          <List>
            {suggestions.map((suggestion) => (
              <ListItem key={suggestion.imdbID}>
                <ListItemAvatar>
                  <Avatar
                    src={
                      suggestion.Poster !== "N/A"
                        ? suggestion.Poster
                        : "https://via.placeholder.com/50"
                    }
                    alt={suggestion.Title}
                    variant="square"
                    sx={{
                      width: 40,
                      height: 60,
                      marginRight: 2,
                    }}
                  />
                </ListItemAvatar>
                <ListItemText primary={suggestion.Title} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default SearchBar;
