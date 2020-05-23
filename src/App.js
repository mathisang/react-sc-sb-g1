import React from "react";
import Category from "./ui/molecules/CategoryStream";

export default function App() {
       return (
            <div className="App">
                <Category orientation="portrait" image="Counter_Strike" title="Counter Strike" type="notags" views="25k" />
                <Category orientation="portrait" image="Chatting" title="Just Chatting" type="onstream" views="14k" />
                <Category orientation="portrait" image="Fortnite" title="Fortnite" tags="Jeux de tir" type="classic" views="38k" />
                <Category orientation="landscape" image="League_of_Legends" title="League of Legends" tags="MOBA" type="classic" views="1.9k" />
            </div>
      );
}
