import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import GithubButton from "./GithubButton";
//holds information related to my powershell scripts
export default function PowerShell(props) {
  return (
    <div>
      <p>
        Here are a few example Powershell scripts that I wrote. All of these
        PowerShell scripts have logging enabled each time it runs, it outputs
        the console output to a text file. At the end of each script, it also
        deletes all logs in the script folder and only keeps the last 20 most
        recent text files This is useful when you have a script scheduled to run
        daily.{" "}
      </p>
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        API DNS Back up
      </Typography>
      <p>
        This script makes some API calls to
        https://api.hackertarget.com/dnslookup so it can retrieve the DNS
        records for the target domain, builds out a row, and exports it to a CSV
        file.
      </p>

      <GithubButton website="https://github.com/dim505/Scripts/blob/master/Powershell/APIDnsBackUp.ps1"/>
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Auto FTP BackUp
      </Typography>

      <p>
        This script gets the FTP username, a hashed password from a text file,
        the URL for the folder to download, and the destination download folder
        and queries the FTP server. Once it has a list of files to download, it
        will download them in the specified local destination folder.
      </p>
      <GithubButton website="https://github.com/dim505/Scripts/blob/master/Powershell/AutoFTPBackUp.ps1" />
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Mailbox Size Report Script
      </Typography>

      <p>
        {" "}
        This script gets all users in active directory who have a mailbox, gets
        their mailbox size. If their available space / max mailbox size ratio is
        over 0.5, it will get added to excel report and emailed.
      </p>
      <GithubButton website="https://github.com/dim505/Scripts/blob/master/Powershell/MailboxSizeReportScript.ps1" />
      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Expired Password Emailing Script
      </Typography>

      <p>
        {" "}
        This script will gets all users and their password expiration dates for
        their Active Directory accounts. Depending when their password expires,
        it will sent a email with a friendlily reminder stating please change
        your password before it expires. If there are any users that are
        expired, it will email a specified email with an attachment of the
        expired accounts. This lets us know who could of possibly left the
        company and did not inform the IT department
      </p>

      <GithubButton website="https://github.com/dim505/Scripts/blob/master/Powershell/ExpiredPasswordEmailingScript.ps1" />

      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Remove Disabled Accounts From Address Book Script
      </Typography>

      <p>
        {" "}
        One common issue in Active Directory is when a person leaves and their
        windows account is disabled, their email address still shows up in the
        Outlook address book. This script will take all disabled accounts in
        Active Directory, loops through a user exception list, and sets a couple
        of flags in Active directory making the account disappear from the
        address book, and sending an email when it ran
      </p>

      <GithubButton website="https://github.com/dim505/Scripts/blob/master/Powershell/RemoveDisabledAccountsFromAddressBookScript.ps1" />
    </div>
  );
}
