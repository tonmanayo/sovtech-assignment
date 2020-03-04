# Apollo Client

## Client
- I have used redux, it was not required to do this app, but I though I should show some simple use case
- I also used redux toolkit for the reducer updates, I am not mutating the state when adding to the array list when doing .push as redux toolkit has some cool baked in features 
- I used tailwinds css, it's a really nice library that has some custom build css classes
- I added apollo graphql client
- I haven't added a linter or prettier which I normally would 
##
- I decided to take a different approach to this by adding the categories as a dropdown list and then adding the jokes to an array. Which then will only add unique jokes to it
- I would have also liked to add a polling feature where the client can select how often that would like to generate a new joke
- I'd also like to add something simple like adding a favourite jokes list
- This is my first time using graphQL on the front end, I haven't generated the types for teh queries
- The things TODO are simple and I'll happily implement them if you'd like just request a PR :D
##

To start server:
**yarn start**

To test:
**yarn start**

run prod:
**yarn build**
