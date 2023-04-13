import useForm from "../hooks/use-form";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameInputIsValid,
    valueChangeHandler: firstNameChangeHandler,
    hasError: firstNameInputHasError,
    inputBlurHandler: firstNameBlurHandler,
    resetForm: resetFirstNameInput
  } = useForm((value) => value.trim() !== "");


  const {
    value: enteredLastName,
    isValid: lastNameInputIsValid,
    valueChangeHandler: lastNameChangeHandler,
    hasError: lastNameInputHasError,
    inputBlurHandler: lastNameBlurHandler,
    resetForm: resetLastNameInput
  } = useForm((value) => value.trim() !== "");


  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    valueChangeHandler: emailChangeHandler,
    hasError: emailInputHasError,
    inputBlurHandler: emailBlurHandler,
    resetForm: resetEmailInput
  } = useForm((value) => value.trim() !== "" && value.includes("@"));


  let formIsValid = false;

  if (firstNameInputIsValid && lastNameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  };


  const formSubmittHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    };

    console.log("Submitted!");
    console.log(enteredFirstName, enteredLastName, enteredEmail);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputHasError ? "form-control invalid" : "form-control";
  const lastNameInputClasses = lastNameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";


  return (
    <form onSubmit={formSubmittHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputHasError && <p className='error-text'>Please enter a first name.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && <p className='error-text'>Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='email'
          id='name'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className='error-text'>Please enter a valid email address.</p>}
      </div>
      <div className='form-actions'>
        <button
          type="submit"
          disabled={!formIsValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
