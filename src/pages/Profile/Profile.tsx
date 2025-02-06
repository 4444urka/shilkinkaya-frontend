import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import './styles.css';
import { useAppSelector } from "../../hooks/hooks";

const ProfilePage = () => {
    const coins = useAppSelector((state) => state.coins.value);
    // Заглушки для данных профиля
    const profileData = {
      nickname: 'User123',
      name: 'Иван Иванов',
      age: 30,
      gender: 'Мужской',
      description: 'Люблю программировать, путешествовать и читать книги.',
      profileImage: '/profile/profile_image.png',
      id: 1488
    };

    return (
      <Box className="profile-page-container" sx={{ paddingLeft: 30, }}>
        <Box
          className="profile-content"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
           {/* Левая часть: Фото профиля */}
            <Box
                className = "profile-image"
                sx = {{
                    display: "flex",
                    justifyContent: "center",
                    flex: "0 0 150px" // фиксированная ширина
                }}
                >
              <Avatar
                alt="Profile Image"
                src={profileData.profileImage}
                sx={{ width: 150, height: 150}}
              />
            </Box>

           {/* Правая часть: Информация профиля */}
          <Box sx={{ marginLeft: '100px',  flex: "1",}}>
            <Typography variant="h5" sx={{fontSize: "45px", mb: 8}}>
              {profileData.nickname}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Имя:</strong> {profileData.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Возраст:</strong> {profileData.age}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Пол:</strong> {profileData.gender}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Описание:</strong> {profileData.description}
            </Typography>
            <Typography variant="body1" gutterBottom>
             <strong>Сумма на балансе:</strong> {coins} 
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  export default ProfilePage;