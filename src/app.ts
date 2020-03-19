import config from 'config';
import AWS from 'aws-sdk';
import fs from 'fs';

export async function lambdaHandler() {
    try {
        const s3 = new AWS.S3({ endpoint: process.env.Endpoint || config.get('endpoint') });
        const fileContent = fs.readFileSync('hello-world.txt');
        const key = `unique-key-${new Date().getTime()}`;
        const bucket = process.env.Bucket || config.get('bucket');
        const params = {
            Bucket: bucket,
            Key: key,
            Body: fileContent,
        }
        s3.putObject(params);
        return { url: s3.getSignedUrl('getObject', { Bucket: bucket, Key: key, ResponseContentDisposition: 'attachment;filename="hello-world.txt"' })};
    } catch (err) {
        console.log(err);
        return err;
    }
}
