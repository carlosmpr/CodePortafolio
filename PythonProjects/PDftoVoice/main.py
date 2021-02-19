from boto3 import Session
from botocore.exceptions import BotoCoreError, ClientError
import PyPDF2
import sys
pdfFileObj = open('SamplePDF.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
pageObject = pdfReader.getPage(0)


session = Session(profile_name="")
polly = session.client("polly")

try:
    # Request speech synthesis
    response = polly.synthesize_speech(Text=pageObject.extractText(), OutputFormat="mp3",
                                        VoiceId="Joanna")

except (BotoCoreError, ClientError) as error:
    # The service returned an error, exit gracefully
    print(error)
    sys.exit(-1)

file = open('speech.mp3', 'wb')
file.write(response['AudioStream'].read())
file.close()
