# Advanced Interactive Budget

A simple, powerful, and private desktop application for managing a personal budget. All your data is stored locally on your machine, giving you complete control over your financial information.

## Features ✨

This application is packed with features to give you a comprehensive overview of your finances and help you make smarter decisions.

* **Detailed Paycheck Breakdown:** Add each paycheck and track every expense and extra piece of income associated with it.
* **Customizable Categories:** Create your own spending categories (e.g., "Pets," "Hobbies") and set monthly budgets for them.
* **Live Budget Tracking:** Visually track your spending progress with progress bars that change color as you near your limit.
* **In-Depth Transaction History:** Click on any category to see a detailed, paginated list of all transactions for the current month.
* **Smart Insights Engine:** Get automated, personalized tips based on your spending habits, savings, and balance reconciliation.
* **Balance Reconciliation:** Enter your actual bank balance to see the difference compared to your projected balance, helping you easily spot un-entered transactions.
* **Savings Goals:** Create savings funds like "Rainy Day Fund" or "New Car" and track your contributions.
* **Modern & Clean UI:** All major sections are collapsible, a sticky side navigation appears on scroll, and a beautiful dark mode theme is included.
* **Local Data Storage:** Your financial data is saved directly on your computer, not in the cloud.

---
## How to Use

There are three ways to use the Advanced Interactive Budget app, depending on your needs.

### ### Option 1: Install the Desktop App (Recommended)

This is the best experience. Your data is stored safely with the application and won't be affected by your web browser's settings.

1.  Go to the **[Releases](https://github.com/kira-khaos/advanced-interactive-budget/releases)** page of this repository.
2.  Under the latest release, find the setup file for your operating system (e.g., `Advanced.Interactive.Budget.Setup.1.5.1.exe` for Windows).
3.  Download and run the installer.

### ### Option 2: Run Directly in Your Browser

You can run this app without any installation by simply opening the `index.html` file.

1.  On the main page of this repository, click the green **`< > Code`** button, then select **Download ZIP**.
2.  Unzip the downloaded file to a folder on your computer.
3.  Open the `index.html` file in your favorite web browser (like Chrome, Edge, or Firefox).

> **Warning:** With this method, your budget data is saved using your browser's `localStorage`. If you clear your browser's "Cookies and other site data," **your budget information will be permanently deleted.**

### ### Option 3: Run from Source Code (For Developers)

If you want to run or modify the code yourself, you can do so easily.

**Prerequisites:**
* [Node.js](https://nodejs.org/) (which includes npm)
* [Git](https://git-scm.com/)

**Instructions:**
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/kira-khaos/advanced-interactive-budget.git](https://github.com/kira-khaos/advanced-interactive-budget.git)
    ```
2.  **Navigate into the project folder:**
    ```bash
    cd advanced-interactive-budget
    ```
3.  **Install all the necessary dependencies:**
    ```bash
    npm install
    ```
4.  **Run the application in development mode:**
    ```bash
    npm start
    ```

---
## Building the App Yourself

This project uses **[Electron](https://www.electronjs.org/)** and **[Electron Forge](https://www.electronforge.io/)** to package the web code into a distributable desktop application. If you have followed the "Run from Source Code" steps above, you already have everything you need to build the app.

To create the setup file yourself, run the following command in your terminal from the project's root directory:

```bash
npm run make