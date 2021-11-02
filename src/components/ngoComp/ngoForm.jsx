/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import Slider from '../ImageSlider/ImgSlider';
import './css/ngoForm.css';

export default function NgoForm() {
  const [ngoId, setNgoId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [landline, setLandline] = useState('');
  const [mobile, setMobile] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Education');
  const [websiteLink, setWebsiteLink] = useState('');
  const [pincode, setPincode] = useState('');
  const [pincodeError, setPincodeError] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [dateOfFoundation, setDateOfFoundation] = useState('');
  const [founderFirstName, setFounderFirstName] = useState('');
  const [founderLastName, setFounderLastName] = useState('');
  const [secretaryFirstName, setSecretaryFirstName] = useState('');
  const [secretaryLastName, setSecretaryLastName] = useState('');
  const [financeFirstName, setFinanceFirstName] = useState('');
  const [financeLastName, setFinanceLastName] = useState('');

  useEffect(async () => {
    const res = await axios.get('/api/getNgoData');
    if (res.status === 200) {
      console.log(res.data);
      const user = res.data.user;
      setNgoId(user._id);
      setName(user.name);
      setEmail(user.email);
      setLandline(user.contactNum?.landline || '');
      setMobile(user.contactNum?.mobile || '');
      setAddressLine1(user.address?.addressLine1 || '');
      setAddressLine2(user.address?.addressLine2 || '');
      setDescription(user?.aboutUs || '');
      setCategory(user?.category || 'Education');
      setWebsiteLink(user?.websiteLink || '');
      setPincode(user.address?.pincode || '');
      setCity(user.address?.city || '');
      setState(user.address?.state || '');
      setCountry(user.address?.country || '');
      setDateOfFoundation(user?.dateOfFoundation || '');
      setFounderFirstName(user.founder?.firstName || '');
      setFounderLastName(user.founder?.lastName || '');
      setSecretaryFirstName(user.secretary?.firstName || '');
      setSecretaryLastName(user.secretary?.lastName || '');
      setFinanceFirstName(user.financeTrustee?.firstName || '');
      setFinanceLastName(user.financeTrustee?.lastName || '');
    } else {
      console.log("Couldn't fetch data");
    }
  }, []);

  const findLocation = (e) => {
    setPincode(e.target.value);
    if (e.target.value.length === 6) {
      setPincodeError('');
      axios
        .get(`https://api.postalpincode.in/pincode/${e.target.value}`)
        .then((res) => {
          setCity(res.data[0].PostOffice[0].Block);
          setState(res.data[0].PostOffice[0].State);
          setCountry(res.data[0].PostOffice[0].Country);
        })
        .then(() => {
          setPincodeError('');
        })
        .catch((err) => {
          console.log(err);
          setPincodeError('Invalid Pincode');
        });
    }
    if (e.target.value.length !== 6) {
      setCity('');
      setState('');
      setCountry('');
      setPincodeError('Pincode must be of 6 digits');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      landline,
      mobile,
      addressLine1,
      addressLine2,
      description,
      category,
      websiteLink,
      pincode,
      city,
      state,
      country,
      dateOfFoundation,
      founderFirstName,
      founderLastName,
      secretaryFirstName,
      secretaryLastName,
      financeFirstName,
      financeLastName,
    };
    console.log(data);
    axios
      .post(`/api/saveNgoProfile/${ngoId}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Form className="ngo-form" onSubmit={handleSubmit}>
        <div className="ngo-form-element">
          <label>Organisation Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Organisation Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            readOnly
          />
        </div>
        <div className="ngo-form-element">
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly
          />
        </div>
        {/* <div className="ngo-form-element">
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
        />
      </div> */}
        <div className="ngo-form-element">
          <label>Date of Foundation</label>
          <br />
          <input
            type="date"
            name="dateOfFoundation"
            placeholder="Date of Foundation"
            value={dateOfFoundation.split('T')[0]}
            onChange={(e) => setDateOfFoundation(e.target.value)}
          />
        </div>
        <div className="ngo-form-element">
          <label>Contact Number</label>
          <br />
          <input
            type="number"
            name="landline"
            placeholder="Telephone Number"
            value={landline}
            onChange={(e) => setLandline(e.target.value)}
          />
          <input
            type="number"
            name="mobile"
            placeholder="Mobile No."
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="ngo-form-element">
          <label>Pincode</label>
          <br />
          <input
            type="number"
            id="pincode"
            name="pincode"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => findLocation(e)}
          />
          <span className="error" style={{ color: 'red' }}>
            {pincodeError}
          </span>
        </div>
        <div className="ngo-form-element">
          <label>Address</label>
          <br />
          <input
            type="text"
            name="addressLine1"
            placeholder="Line 1"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
          />
          <input
            type="text"
            name="addressLine2"
            placeholder="Line 2"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="City"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="State"
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            type="text"
            placeholder="Country"
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="ngo-form-element">
          <label>Founder</label>
          <br />
          <input
            type="text"
            name="founderFirstName"
            placeholder="First Name"
            value={founderFirstName}
            onChange={(e) => setFounderFirstName(e.target.value)}
          />
          <input
            type="text"
            name="founderLastName"
            placeholder="Last Name"
            value={founderLastName}
            onChange={(e) => setFounderLastName(e.target.value)}
          />
        </div>
        <div className="ngo-form-element">
          <label>Secratary</label>
          <br />
          <input
            type="text"
            name="secretaryFirstName"
            placeholder="First Name"
            value={secretaryFirstName}
            onChange={(e) => setSecretaryFirstName(e.target.value)}
          />
          <input
            type="text"
            name="secretaryLastName"
            placeholder="Last Name"
            value={secretaryLastName}
            onChange={(e) => setSecretaryLastName(e.target.value)}
          />
        </div>
        <div className="ngo-form-element">
          <label>Finance Trustee</label>
          <br />
          <input
            type="text"
            name="financeFirstName"
            placeholder="First Name"
            value={financeFirstName}
            onChange={(e) => setFinanceFirstName(e.target.value)}
          />
          <input
            type="text"
            name="financeLastName"
            placeholder="Last Name"
            value={financeLastName}
            onChange={(e) => setFinanceLastName(e.target.value)}
          />
        </div>
        <br />
        <br />
        <div className="ngo-form-element">
          <div className="rectangle">
            <label>Tax Exemption Certificate</label>
            <br />
            <br />
            <button>upload</button>
          </div>
        </div>
        <div className="ngo-form-element">
          <div className="rectangle">
            <label>Registration Certificate </label>
            <br />
            <br />
            <button>upload</button>
          </div>
        </div>
        <div className="ngo-form-element">
          <div className="rectangle">
            <label>Annual Report</label>
            <br />
            <br />
            <br />
            <button>upload</button>
          </div>
        </div>
        <div className="ngo-form-element">
          <div className="rectangle">
            <label>Trust Deeds</label>
            <br />
            <br />
            <br />
            <button>upload</button>
          </div>
        </div>
        <div className="ngo-form-element">
          <label>NGO Website Link</label>
          <input
            type="url"
            name="websiteLink"
            placeholder="Website Link"
            value={websiteLink}
            onChange={(e) => setWebsiteLink(e.target.value)}
          />
        </div>

        <div className="ngo-form-element">
          <label>NGO type</label>
          <select
            value={category}
            name="category"
            onChange={(e) => setCategory(e.currentTarget.value)}
          >
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Disaster Relief">Disaster Relief</option>
            <option value="Sanitation">Sanitation</option>
            <option value="Environment">Environment</option>
            <option value="Social">Social</option>
            <option value="Youth">Youth</option>
            <option value="Employment">Employment</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="ngo-form-element">
          <label>About Us</label>
          <br />
          <textarea
            rows="7"
            cols="80"
            name="aboutUs"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <br />
        <br />
        <div className="ngo-form-element">
          <Button type="submit">Save Changes!</Button>
        </div>
        <br />
        <br />
        <div className="gallery">
          <div className="upload-gallery">
            <button>upload</button>
          </div>
        </div>
      </Form>
      <Slider />
    </div>
  );
}
