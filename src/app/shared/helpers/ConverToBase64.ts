export class ConvertToBase64 {
  static convertPDFtoBase64(path: string): Promise<string> {
    /* istanbul ignore next */
    return fetch(path)
      .then((r) => r.blob())
      .then((q) => {
        return new Promise<string>((resolve, reject) => {
          var newBlob = new Blob([q], { type: 'application/pdf' });
          var reader = new FileReader();
          reader.readAsDataURL(newBlob);
          reader.onloadend = () => {
            resolve(String(reader.result));
          };
        });
      });
  }
}
