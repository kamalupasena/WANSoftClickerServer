package lk.mrt.softclicker.udp;

import java.io.IOException;
import java.net.*;

public class BroadcastingClient {

    private static final int TCP_PORT = 8080;
    private static final int BORADCAST_INTERVAL = 5000;


    public static void main(String[] args){

        while(true) {
            try {
                broadcast();
                Thread.sleep(BORADCAST_INTERVAL);
            } catch (IOException | InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    private static void broadcast() throws IOException {

        MulticastSocket socket = new MulticastSocket(TCP_PORT);
        socket.setBroadcast(true);

        byte[] buffer = "Hello World @ UOM".getBytes();

        InetSocketAddress inetSocketAddress = null;

        try {
            System.out.println("IP " +HandlerUtils.getBroadcast().toString().substring(1));
            inetSocketAddress = new InetSocketAddress(HandlerUtils.getBroadcast().toString().substring(1),TCP_PORT);
        } catch (Exception e) {
            e.printStackTrace();
        }

        InetSocketAddress finalInetSocketAddress = inetSocketAddress;

        DatagramPacket packet = null;
        if (finalInetSocketAddress != null) {
            packet = new DatagramPacket(buffer, buffer.length, finalInetSocketAddress);

            try {
                socket.send(packet);

            } catch (IOException e) {
                e.printStackTrace();
            }
        }


        System.out.println("BoradCast Sent");


    }
}