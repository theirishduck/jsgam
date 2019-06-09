import Menu from './menu.js';

class MainMenu extends Menu{
  create(){
      let gameTexts=this.game.data.texts;
      this.addButton("New",gameTexts.NewGame);
      this.addButton("Continue",gameTexts.Continue);
      this.addButton("Options",gameTexts.Options);
      this.addButton("Help",gameTexts.Help);
      this.addButton("Credits",gameTexts.Credits);

      this.disable("Continue");

      this.sort();
    }

  changeLanguage(){
    this.modify("New",this.game.data.texts.NewGame);
    this.modify("Continue",this.game.data.texts.Continue);
    this.modify("Options",this.game.data.texts.Options);
    this.modify("Help",this.game.data.texts.Help);
    this.modify("Credits",this.game.data.texts.Credits);

    this.sort();
  }

}
export default MainMenu;