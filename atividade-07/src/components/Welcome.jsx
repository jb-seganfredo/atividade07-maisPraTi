import PropTypes from 'prop-types';

function Welcome({ name, email }) {
    return (
        <div className="bg-slate-500 text-slate-50 p-4 my-6">
            <h2 className="text-2xl font-bold text-center m-5">Welcome</h2>
            <p className="text-center">Welcome, {name}!</p>
            <p className="text-center">Your email is {email}.</p>
        </div>
    );
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default Welcome;
