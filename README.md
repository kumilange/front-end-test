# 🌎 Earthquake Data Search

**This is my frontend work for Synspective's take home challenge 💻**
![earthquake](https://user-images.githubusercontent.com/28984604/95196604-43cf6c00-0813-11eb-89f1-b1eff7f671e3.png)

## 🎓 Assignment

**Create a list of Earthquake locations with a Map!🗺**

#### Specs to implement:

https://github.com/synspective/front-end-test

- [x] Displays a list of earthquakes with a summary (you can set a limit to the total amount shown).
- [x] User can search earthquakes via date
- [x] Plot the location of the Earthquake on a map

## 🔰 Getting Started

### Prerequisites

- node > 8.16.0
- yarn > 0.25

### 1. Install

```
git clone git@github.com:kumiko-haraguchi/front-end-test.git
cd front-end-test
yarn install
```

### 2. Get your Google Map API key

https://developers.google.com/maps/documentation/javascript/get-api-key

### 3. Add your Google Map API key to googleMapsApiKey value in Map component

Go to `src/components/Map/index.tsx`

googleMapsApiKey={<s>process.env.REACT_APP_GOOGLE_MAP_API_KEY</s>YOUR_API_KEY}

### 4. Build app

```
yarn build
```

### 5. Serve app

```
serve -s build
```

### 6. Check app on browser

You'll see the app on [http://localhost:5000](http://localhost:5000) or YOUR_IP_ADDRESS:5000! 🎉

## 🖥 Checked With

- Chrome, Firefox, Safari Desktop (Sorry, I don't have Windows testing environment at the moment)

## 📝 Things To Do If I Had More Time

- Use styled-components
- Write tests
- Improve Type definition
