import { Box, Typography } from "@mui/material";
import Paragraph from "../../components/Paragraph/Paragraph";
import { useAppMedia } from "../../hooks/hooks";

const Homepage = () => {
  const matches = useAppMedia()

  return (
    <>

      <Box
        sx={{
          display: "flex",
          paddingX: matches ? 30 : 2, // Используем paddingX для горизонтальных отступов
          gap: 7,
          flexDirection: "column",
        }}
      >
        <Typography variant="h3">Шилкинская улица</Typography>
        <Paragraph>
          Шилкинская улица — улица Владивостока, петлеобразной формы, начинается
          и заканчивается у Проспекта Красного Знамени.
        </Paragraph>

        <Typography variant="h3">История</Typography>

        <Paragraph>
          Название улицы, возможно, дано по реке Шилка, известной с самого
          начала освоения Забайкалья русскими землепроходцами («Силькарь»
          по-эвенкийски — узкая долина, впоследствии русифицировалось в Шилкарь)
        </Paragraph>

        <Typography variant="h3">Достопримечательности</Typography>
        <Paragraph>Нагорный парк</Paragraph>

        <Typography variant="h3">Известные жители</Typography>
        <Paragraph>
          В 1919—1920 годах с семьей жил известный русский поэт и художник Давид
          Бурлюк.
        </Paragraph>
      </Box>
    </>
  );
};

export default Homepage;
