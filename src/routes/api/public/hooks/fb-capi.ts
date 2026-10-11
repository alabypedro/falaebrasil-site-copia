import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/api/public/hooks/fb-capi')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
          const PIXEL_ID = process.env.FACEBOOK_PIXEL_ID;

          if (!ACCESS_TOKEN || !PIXEL_ID) {
            return new Response(JSON.stringify({ error: 'Missing FB configuration' }), {
              status: 500,
              headers: { 'Content-Type': 'application/json' },
            });
          }

          const body = await request.json();
          const { eventName, eventId, eventSourceUrl, userData, customData, testEventCode } = body;

          const fbEvent: any = {

            event_name: eventName,
            event_time: Math.floor(Date.now() / 1000),
            action_source: 'website',
            event_source_url: eventSourceUrl,
            event_id: eventId,
            user_data: {
              client_ip_address: request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip'),
              client_user_agent: request.headers.get('user-agent'),
              ...userData,
            },
            custom_data: customData,
          };

          if (testEventCode) {
            fbEvent.test_event_code = testEventCode;
          }

          const response = await fetch(

            `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ data: [fbEvent] }),
            }
          );

          const result = await response.json();
          return new Response(JSON.stringify(result), {
            status: response.ok ? 200 : response.status,
            headers: { 'Content-Type': 'application/json' },
          });
        } catch (error) {
          console.error('FB CAPI Error:', error);
          return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      },
    },
  },
});
