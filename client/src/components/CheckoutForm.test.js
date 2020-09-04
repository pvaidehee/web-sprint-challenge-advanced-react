import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";



// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange
    const { getByText } = render(<CheckoutForm />)

    //Act
    const header = getByText(/checkout form/i)

    //Assert
    expect(header).toBeInTheDocument()

});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    fireEvent.change(firstNameInput, { target: { value: 'Vee' } })
    fireEvent.change(lastNameInput, { target: { value: 'Patel' } })
    fireEvent.change(addressInput, { target: { value: '3520 Birkdale ct' } })
    fireEvent.change(cityInput, { target: { value: 'Raliegh' } })
    fireEvent.change(stateInput, { target: { value: 'NC' } })
    fireEvent.change(zipInput, { target: { value: '28303' } })


    expect(firstNameInput.value).toBe('Vee')
    expect(lastNameInput.value).toBe('Patel')
    expect(addressInput.value).toBe('3520 Birkdale ct')
    expect(cityInput.value).toBe('Raliegh')
    expect(stateInput.value).toBe('NC')
    expect(zipInput.value).toBe('28303')



    const checkoutButton = screen.getByText('Checkout')
 
    fireEvent.click(checkoutButton)

    //Assert
    const grabName= screen.getByText(/vee/i)
    expect(grabName).toBeInTheDocument()
    

    const success = screen.getByTestId(/successMessage/i)
    expect(success).toBeInTheDocument()

});