import React, { useState } from "react";
import { Box, Typography, Avatar, TextField, Button } from "@mui/material";
import { Person } from "@mui/icons-material";

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);

  const handleSave = () => {
    const updatedUser = { ...user, name: newName };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
    window.location.reload();
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "50px auto",
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <Avatar
        sx={{
          margin: "0 auto",
          backgroundColor: "#48AFFF",
          width: 80,
          height: 80,
          marginBottom: 2,
        }}
      >
        <Person sx={{ fontSize: 40, color: "white" }} />
      </Avatar>
      {!isEditing ? (
        <>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Welcome, {user.name}!
          </Typography>
          <Button
            variant="contained"
            onClick={() => setIsEditing(true)}
            sx={{ backgroundColor: "#48AFFF" }}
          >
            Edit Name
          </Button>
        </>
      ) : (
        <>
          <TextField
            fullWidth
            label="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{ backgroundColor: "#48AFFF", marginRight: 1 }}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={() => setIsEditing(false)}
            sx={{ color: "#48AFFF" }}
          >
            Cancel
          </Button>
        </>
      )}
    </Box>
  );
};

export default Profile;
