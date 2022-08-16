const config = {
	// Backend config
	// S3 bucket config
	// s3: {
	//   REGION: process.env.REACT_APP_REGION,
	//   BUCKET: process.env.REACT_APP_BUCKET,
	// },
	// API Gateway config
	// apiGateway: {
	//   REGION: process.env.REACT_APP_REGION,
	//   URL: process.env.REACT_APP_API_URL,
	// },
	cognito: {
	  REGION: process.env.REACT_APP_REGION,
	  USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
	  APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
	  IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
	},
  };
  
  export default config;