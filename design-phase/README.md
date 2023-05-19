# design-phase

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Your Set up

1. Ensure you have ***Node.js*** installed
2. If you can, use **Git** to clone the project wherever you want it on your computer
   - If not, just download the ZIP folder, but note you will have to upload any changed files back into github manually
3. In VS code, you can use **CTRL + `** to open the terminal
4. Make sure you're in the **design-phase** directory
   - If not, write **cd design-phase** 
5. In the terminal, write **npm install** to install any dependencies that this application uses.
5. In the terminal, write **npm run serve** to start the server. Wait, and it will give you a **localhost** link. This opens the application in your browser. 
6. Visit the page where your assigned component is. Also visit the component in the IDE. You can find it in **src/components/**
7. Edit however you need, and each time you save, it will refresh the page.
- If you are just uploading to the github instead of using git, it is fine since the only thing you will need to upload is your component.
## Assignments

I have made some random assignments, if you want to change it, ask whoever has the one you want. Or notify what you want to work on if the component doesn't exist yet

- Market Listing: Nahum
- Login Page: Konrad
- Contact Form: Erik
- Faq Box: Jose

## Vue Basics

I have set up the components and main views. For example, there is a main view for the contact page which contains 2 components inside: one for contact and the other for faq.

>   src/views
> src/components

You will write all your code within that component and it will not spill into other components. This is why style says scoped, meaning it will only affect your component.

If you add pictures, put them in the public folder.

Ask me how to call functions if you need to. Ex: Onlick in Vue is @click='functionNameNoParenthesis'

If you are in charge of a component that will be used multiple times such as the faq box, just make an example one for now and then I will help you create a dynamic object from it that takes in variables.

## Style

I created two css files for simplicity and efficiency. You can find the css files in the **Assets** folder.

> src/assets

**Base.css** lists all the variables we will use, so call those variables for your color neccesities. (Bottom of file) It also contains the styling for basic html tags like button or h1. So, you will not need to write it yourself. Ex: Text will already be in dark color mode if your browser is in dark mode.

 **Main.css** contains styling for classes that are used multiple times. For example, flex-spacer should perform the same action anywhere in the site, be it in a main view or a component.


 You will write your css in your own file. It will not affect anything outside of it.

 ```
<style scoped>
 ```

 The main pages are display: flex. However, the components for yall are display: inline (the default). There are no other styling changes to your components. Style them as you please.

 - External CSS files: If you want to seperate your css file from the component, place it in the **assets** folder. Then in your component \<style scoped>, write **\@import '../assets/<yourFile.css>'**.

**When you are styling, style while keeping in mind that this website will also be visited on phones if we plan to advertise**