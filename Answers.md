1. What problem does the context API help solve?
   you no longer have to pass props down from component to component

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Actions send data to the store.
   reducers are functions that take the state of the application and an action and then return a new state.
   Store is the object that holds the application state

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   application state lives in the store and can be used by mulitple components. component state only lives in the component it's in, like forms for example.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   A thunk is another word for a function.It’s a special function that’s returned by another.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
   context API! it's easy to use and not as cumbersome as redux
