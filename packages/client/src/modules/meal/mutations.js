import { gql } from "@apollo/client";

export const ADD_MEAL = gql`
  mutation AddMeal($input: MealInput) {
    addMeal(input: $input) {
      ok
      errors {
        message
      }
    }
  }
`;

export const UPDATE_MEAL = gql`
  mutation UpdateMeal($id: ID!, $input: MealInput) {
    updateMeal(id: $id, input: $input) {
      ok
      errors {
        message
      }
    }
  }
`;
