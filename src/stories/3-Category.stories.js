import React from 'react';
import { action } from '@storybook/addon-actions';
import Badge, { colors } from '../ui/atoms/Badge';
import Category from '../ui/molecules/CategoryStream';
import Images from "../ui/particles/Images";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
    title: 'Catégorie',
    component: Category,
    decorators: [withKnobs]
};

const image = {
    Counter_Strike: "Counter_Strike",
    Fifa: "Fifa",
    Fortnite: "Fortnite",
    Chatting: "Chatting",
    League_of_Legends: "League_of_Legends",
    Warzone: "Warzone"
  };

export const Sans_Tags = () => <Category orientation="portrait" image={select("Image", image, "Fifa")} title={text("Nom de la catégorie", "Fifa 20")} type="notags" views={text("Nombre de spectateur", "27k")} />;
export const Stream_Hors_ligne = () => <Category orientation="portrait" image={select("Image", image, "Counter_Strike")} title={text("Nom de la catégorie", "Counter Strike")} type="onstream" views={text("Nombre de spectateur", "34k")} />;
export const Desktop = () => <Category orientation="portrait" image={select("Image", image, "League_of_Legends")} title={text("Nom de la catégorie", "League of Legends")} tags="MOBA" type="classic" views={text("Nombre de spectateur", "1.5k")} />;
export const Mobile = () => <Category orientation="landscape" image={select("Image", image, "Fortnite")} title={text("Nom de la catégorie", "Fortnite")} type="classic" tags="Jeux de tir" views={text("Nombre de spectateur", "2.9k")} />;
