import { useMemo } from "react";

function getInitials(name: string): string {
  const initials = name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
  return initials.substring(0, 2);
}

const colors = [
  "#6A0572", // Roxo escuro
  "#F05454", // Vermelho suave
  "#30475E", // Azul escuro
  "#F5A962", // Laranja claro
  "#A1DE93", // Verde suave
  "#F45B69", // Rosa escuro
  "#00BFA6", // Verde água
  "#FFC93C", // Amarelo
  "#F57C00", // Laranja vibrante
  "#8E24AA", // Roxo
];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export function useAvatar(name: string) {
  const initials = useMemo(() => getInitials(name), [name]);
  const backgroundColor = useMemo(() => getRandomColor(), []);

  return {
    initials,
    backgroundColor,
  };
}
