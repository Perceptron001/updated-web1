import React, { useState } from 'react';

// Define your component
const FormDropdown = () => {
    // List of form names
    const formNames = [
        "Lease Agreement",
        "Rental Agreement",
        "Employment Contract",
        "Sale Deed",
        "Partnership Deed",
        "Loan Agreement",
        "Service Agreement",
        "Non-Disclosure Agreement",
        "Power of Attorney",
        "Will"
    ];
    // Object with form values
    const formsValues = {
        "Lease Agreement": ["Lease Term", "Lease Amount"],
        "Rental Agreement": ["Rental Term", "Rental Amount"],
        "Employment Contract": ["Employee Name", "Salary"],
        "Sale Deed": ["Property Description", "Sale Price"],
        "Partnership Deed": ["Partner Names", "Business Nature"],
        "Loan Agreement": ["Loan Amount", "Interest Rate"],
        "Service Agreement": ["Service Scope", "Payment Terms"],
        "Non-Disclosure Agreement": ["Confidential Information", "Obligated Parties"],
        "Power of Attorney": ["Grantor Name", "Powers Granted"],
        "Will": ["Beneficiaries Names", "Estate Description"]
    };

    // Hook to manage the selected form name
    const [selectedForm, setSelectedForm] = useState("");

    const handleSelectChange = (event) => {
        setSelectedForm(event.target.value);
    };
    return (
        <div>
            {/* Dropdown for selecting the form type */}
            <select onChange={handleSelectChange} value={selectedForm}>
                <option value="">Select a form...</option>
                {formNames.map(formName => (
                    <option key={formName} value={formName}>{formName}</option>
                ))}
            </select>

            {/* Display input fields based on selected form */}
            <div>
                {selectedForm && formsValues[selectedForm].map((fieldLabel, index) => (
                    <div key={index}>
                        <label>{fieldLabel}:</label>
                        <input type="text" name={fieldLabel.toLowerCase().replace(/\s+/g, '-')} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormDropdown;
