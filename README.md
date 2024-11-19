# Emissions Dashboard

This is an Angular application that shows the emissions data of a company. It uses NGXS, a library for managing the application's data, especially the emissions information. It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.


## Key Features

1. **Dynamic Donut Chart**: The application can dynamically create the `DonutChartComponent` based on the data from the NGXS store. This makes the chart flexible and able to change with the emissions data without needing major changes to the `DashboardComponent`.

2. **Responsive Layout**: The project uses Tailwind CSS, a CSS framework, to create a responsive and visually appealing layout for the `DashboardComponent`. Tailwind's utility classes make it easy to style the UI elements.

3. **Accessible UI Components**: The application uses the Angular Material library, particularly the `mat-select` component, to provide a good dropdown function in the `DashboardComponent`. The Angular Material library has well-designed UI components that help the team focus on the application's core functionality.

## Technical Decisions

### NGXS State Management

The project uses NGXS, a library for managing the application's data, especially the emissions information. NGXS is good because it can handle complex data and state-driven interactions in the `DashboardComponent`. NGXS has useful features like actions, selectors, and state changes, which help organize the state management.



### Dynamic Donut Chart

The project includes dynamically creating the `DonutChartComponent` based on the data from the NGXS store. This was done to make the chart component flexible and reusable. The chart can change with the emissions data without needing major changes to the `DashboardComponent`. Dynamically creating the `DonutChartComponent` also makes the code structure more modular and component-based, which is good for Angular development.



### Tailwind CSS

The project uses Tailwind CSS, a CSS framework, to style the application, especially the responsive layout of the `DashboardComponent`. Tailwind's utility classes made it easy to style the UI elements without complex CSS. This approach worked well with the component-based architecture of the Angular application.


### Angular Material

The project also used the Angular Material library, especially the `mat-select` component, to provide a good dropdown function in the `DashboardComponent`. The Angular Material library has well-designed and tested UI components, which helped the team focus on the application's core functionality rather than implementing custom UI elements.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Conclusion

By using NGXS for state management, dynamically creating the `DonutChartComponent`, and using Tailwind CSS and the Angular Material library, the development team was able to create a responsive and visually appealing `DashboardComponent` that followed good practices for modern web applications.

<em>This Project and ReadMe were support written by *[Claude](https://claude.ai)*</em>
