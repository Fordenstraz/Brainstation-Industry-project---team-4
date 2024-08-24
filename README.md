# Team 4 - The New York Times industry project

## Cross-promotional Banner

This component is meant to show at-a-glance many of the other products offered by the New York Times.

### Breakdown

-   Slide content currently combines an image with the page title. This is coded manually, for the demo. In future iterations I would like the cards to use the image and _title_ of the main article on each page, or better yet: of article that are related to a specific user's interests. This would be done by collecting the data and mapping it into the component, instead of adding each card individually. Suggestions can be made by tracking what pages similar users have explored.

-   Responsivesness was a priority with this design. The banner needs to scale to each screen size without squashing or stretching the cards. Breakpoints were used to set the number of slides in the carouself at once. Due to the limited number of slides coded into the demo, the _look_ of the carousel breaks down at larger screen sizes.

-   Scrolling occurs automatically for the first full rotation (scrolling through each slide once), then it remains static. Scrolling can still be acheived by swiping (on touch screens) or by clicking the navigation dots below the carousel. The scrolling timer is currently set manually, to runn through 5 slides. In future iterations I want the timer to be calculated automatically based on the number of slides mapped into the component.
