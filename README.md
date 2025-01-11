# Portfolio Tracker

A MERN stack application to track stock portfolios with real-time data.

## Features

- Add, view, edit, and delete stock holdings.
- Track total portfolio value based on real-time stock prices.
- View a dashboard displaying key portfolio metrics (e.g., total value, top-performing stock).

## Technologies Used

- **Frontend:** React, Bootstrap
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **API:** Alpha Vantage for real-time stock prices

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ankki457/portfolio-tracker
   cd portfolio-tracker
   ```

2. **Install backend dependencies:**

   ```bash
   cd portfolio-tracker-backend
   npm install
   ```

3. **Install frontend dependencies:**

   ```bash
   cd portfolio-tracker-frontend
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `backend` directory with the following:

   ```plaintext
   MONGO_URI=your_mongo_uri
   ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
   ```

## Running the Application

1. **Start the backend server:**

   ```bash
   cd portfolio-tracker-backend
   npm start
   ```

2. **Start the frontend development server:**

   ```bash
   cd portfolio-tracker-frontend
   npm start
   ```

3. **Access the application:**

   Open your browser and go to `http://localhost:3000`.

## Assumptions and Limitations

- The application assumes valid stock tickers are used.
- API rate limits may affect real-time data updates.

## Links

- **Deployed Application:** [Your Deployed Link](#)
- **API Documentation:** [Alpha Vantage API](https://www.alphavantage.co/documentation/)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please contact [sahankit457@gmail.com](mailto:sahankit457@gmail.com).
