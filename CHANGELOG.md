# Changelog

---

## [1.6.4] - 2025-08-21 ✨

This version introduces major stability improvements, critical data management features, and enhanced personalization.

### Bug Fixes

* **Fixed Critical Input Bug:** Resolved a major issue where input fields in the desktop app would become unresponsive after using the **"Clear All Data"** function. This was caused by a focus management glitch with the native `confirm()` dialog. The fix programmatically resets the window's focus state to ensure all inputs remain interactive.

### New Features

* **Data Backup & Restore:** Users can now export all budget data to a single `.json` file and import it later to restore the application's state, providing a crucial safety net.
* **Editable Application Title:** The main title of the application is now editable. The custom title is automatically saved and included in all data backups.
* **Sample Backup File:** A `sample-backup.json` file has been added to the project to demonstrate the backup file's structure.