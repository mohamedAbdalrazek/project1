New Updates!:  
	1-devDependencies & Dependencies packages has been rearranged.                       (in package.json)
	2-Error messages for all scenarios has been implemented.                             (in line 18 in src/middlewares/mid1.ts)
	3-testing image processing function has been added.                                  (in line 40 in src/tests/indexSpec.ts)
	4-parameter type and return type for all functions and callbacks have been provided. (in line 29 in src/index.ts)



The Structure:
    1- our compiled .js files are in /dist
    2- .ts files are in /src
        i- the main .ts file is index.ts located in src
        ii- has 2 middlewares performing resizing images


    3- tests are in /tests/indexSpec.ts
        i-there is two main tests :
            a- server tests: which tests if the server is initializing properly
            b- image resizing tests: tests the behaviour of the API
                if the user inputs invalid parameters
    4- all packages in package.json are installed and working properly
        i-prettier
        ii-eslint
        iii-express
        iv-jasmine
        v-supertest
        vi-nodemon
        vii-sharp

    5-there is an api folder containing the main route of the API;
        

    

The Usage;

    1-to enter the server:
        http://localhost:3030
        you will see the message:
        //Welcome to our server
        //to resize your image use the following:
        //http://localhost:3030/image?filename=name&height=height&width=width

    2-to enter to the API:
        http://localhost:3030/api

        you will see the message:
        //Welcome to api!


    3-To resize an image named(a.jpg) located in images folder with height =200 , width =300 you use the following url:
        http://localhost:3030/image?filename=a&height=200&width=200
