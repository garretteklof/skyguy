import React from "react";
import axios from "axios";

import Header from "./Header";
import Input from "./Input";
import DataDump from "./DataDump";

export default class Container extends React.Component {
  state = {
    address: "",
    timezone: "America/Chicago",
    isLoading: false,
    error: ""
  };

  onAddressChange = e => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  };

  getWeatherSummary = data => {
    let minuteSum;
    if (data.minutely) {
      minuteSum = data.minutely.summary;
    } else {
      minuteSum = "";
    }
    return data.hourly && data.daily
      ? minuteSum + " " + data.hourly.summary + " " + data.daily.summary
      : "No weather summary at this time.";
  };
  hideData = () => {
    return this.state.time ? "" : "data--hide";
  };
  callAPI = async e => {
    e.preventDefault();
    this.setState(() => ({ isLoading: true }));
    try {
      const { data } = await axios.post("/api", {
        address: this.state.address
      });
      const { time, temperature, apparentTemperature, icon } = data.currently;
      const { precipProbability } = data.hourly.data[1];
      const { formattedAddress, timezone } = data;
      const summary = this.getWeatherSummary(data);
      this.setState(() => ({
        time,
        timezone,
        temperature,
        apparentTemperature,
        precipProbability,
        icon,
        summary,
        formattedAddress,
        address: "",
        isLoading: false,
        error: ""
      }));
    } catch (e) {
      let error;
      if (e.response.status === 500) {
        error =
          "Unable to connect to API servers. Check internet connection, or try again soon.";
      } else if (e.response.status === 400) {
        error =
          "Unable to access weather data for given address. Please recheck, or try another.";
      } else {
        error = e.message;
      }
      this.setState(() => ({
        isLoading: false,
        error
      }));
    }
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Input
          address={this.state.address}
          onAddressChange={this.onAddressChange}
          callAPI={this.callAPI}
          isLoading={this.state.isLoading}
        />
        {this.state.error ? (
          <p className="error">{this.state.error}</p>
        ) : (
          <DataDump
            time={this.state.time}
            timezone={this.state.timezone}
            temperature={this.state.temperature}
            apparentTemperature={this.state.apparentTemperature}
            precipProbability={this.state.precipProbability}
            formattedAddress={this.state.formattedAddress}
            icon={this.state.icon}
            summary={this.state.summary}
            hideData={this.hideData}
          />
        )}
      </div>
    );
  }
}
