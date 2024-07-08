// src/pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from "next";
import formidable, { IncomingForm } from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = (req: NextApiRequest, res: NextApiResponse) => {
  const form = new IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: "Error parsing files" });
      return;
    }

    // Handle file uploads here, e.g., save files to disk or cloud storage
    console.log(fields);
    console.log(files);

    res.status(200).json({ message: "Files uploaded successfully" });
  });
};

export default upload;
