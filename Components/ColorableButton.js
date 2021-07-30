import styled from "@emotion/native";

export const ColorableButton = styled.TouchableOpacity(
  {
    borderRadius: 5,
    padding: 20,
    minWidth: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  ({ color, theme }) => ({
    backgroundColor: !color ? theme.colors.primary : color,
  })
);
