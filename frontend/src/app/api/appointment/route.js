import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import AppointmentRequest from "@/models/appointment";


export const POST = async (request) => {
    await connectDB();
    try {
    const { name, email,  } = await request.json();
  
    console.log(name, email, phone, address, concern, reason, patientId, doctorId);

    const newAppointment = new AppointmentRequest({
      name, 
      email, 
      phone, 
      address, 
      concern, 
      reason, 
      patientId, 
      doctorId
    });
     
    console.log(newAppointment);
      await newAppointment.save();
      return new NextResponse("Appointment created", {
        msg:"Appointment created",
        status: 201,
      });
    } catch (err) {
      return new NextResponse(err.message, {
        status: 500,
      });
    }
  }; 