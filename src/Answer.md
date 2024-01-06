# Question:

       Which out of the two components (cwhich are performing the same funtionality) is performing better and how?

# Answer :

#    PureComponent:

        Performance Benefits:

        PureComponent performs a shallow comparison of the current and next state and props before deciding to re-render.
        It helps to prevent unnecessary re-renders if the props and state have not changed.

        Use Case:

        Suitable for scenarios where you have complex state or props objects, and you want to avoid unnecessary renders when the data remains the same.


#    Simple Component:

        Performance Considerations:

        Simple components may re-render more frequently since they don't perform automatic prop and state comparisons like PureComponent.
        If you manage updates and re-renders carefully, simple components can be efficient for many scenarios.

        Use Case:

        Suitable for situations where you need more control over the rendering logic or when the component's rendering is not significantly impacted by frequent re-renders.
