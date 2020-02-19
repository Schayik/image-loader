TODO: improve

## Requirements

This application will use Pixabay API (http://www.pixabay.com) to fetch images. These will have to be rendered on the page. The UI of this page should consist of a grid layout (for example like Pixabay itself or Unsplash). The content should be visible correctly both in desktop and smartphones. The pagination system for the content of the page will be decided by the developer (page numbers, infinite scroll, etc). 

A second page should be implemented. This will consist of a detailed view of one of the pictures. In this one, a bigger version of the image, the name of the photographer, tags, views, downloads and size should be displayed. The UI will be free, so the developer can decide how it should look. As in the previous one, it should be visible both on desktop and smartphones.

```
Pixabay API documentation: https://pixabay.com/api/docs/
Pixabay Key: <key>
```

The provided key will let the developer make 5000 API calls per hour. If while testing it, the developer runs out of requests, feel free to create another Pixabay account and use that access key instead. ​Avoid unnecessary requests where possible.
 
The app should be fully tested (unit tests) and the code should contain comments where appropriate.

For styles the developer can use any library/framework he/she likes.


## Development

1. clone repository: `https://github.com/Schayik/image-loader`
2. open folder
3. create `.env` and add `REACT_APP_PIXABAY_KEY`
4. start development: `yarn start`


<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
