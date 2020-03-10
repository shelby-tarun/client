import React from 'react';
import { Field, reduxForm, isPristine } from 'redux-form';

//reduxForm has connect behaviour

const StreamCreate = props => {

    const renderInput = ({ input, label }) => {
        console.log(input);
        return (
            <div className="field">
                <label>
                    <span>{label}</span>
                    <input onChange={input.onChange} value={input.value} autoComplete="off" />
                </label>
            </div>
        )
    }

    const onSubmit = formValues => {
        console.log(formValues);
    }

    return (
        <form onSubmit={props.handleSubmit(onSubmit)} className="ui form">
            <Field
                name="title"
                component={renderInput}
                label="Enter Title"
            />
            <Field
                name="description"
                component={renderInput}
                label="Enter Description"
            />
            <button className="ui button primary">Submit</button>
        </form>
    );
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);

/**
 * In field we can pass additional properties like label
 * so it is going to passed as props to renderInput (in our case)
 * and renderInput can destructure it as shown eg. formProps = {input, label}
 */