import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import IKaizen from '../../types/IKaizen';
import axios from "axios";

const prisma = new PrismaClient();

async function createKaizen(item: IKaizen): Promise<IKaizen> {
  return axios
    .post<IKaizen>(
      'api/createKaizen',
      item,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      },
    )
    .then((response) => response.data);
}

export default createKaizen;
