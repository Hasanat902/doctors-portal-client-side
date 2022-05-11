import React from 'react';

const Service = ({service, setTreatment}) => {

    const {name, slots} = service;

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-red-500'>Try Another Date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                <label for="booking-modal" disabled={slots.length === 0} onClick={() => setTreatment(service)} className="btn btn-secondary btn-sm uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;