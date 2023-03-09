using System;
using System.Security.Cryptography;
using System.Text;

namespace SmallBaseball.Application.Helpers
{
    public static class AesEncryptionHelper
    {
        public static string Encrypt(string content, string key)
        {
            key = key.PadRight(32, ' ');
            byte[] keyArray = Encoding.UTF8.GetBytes(key.Substring(0, 32));
            using (SymmetricAlgorithm des = Aes.Create())
            {
                des.Key = keyArray;
                des.Mode = CipherMode.CBC;
                des.Padding = PaddingMode.PKCS7;
                des.IV = Encoding.UTF8.GetBytes(key.Substring(0, 16));
                using (ICryptoTransform cTransform = des.CreateEncryptor())
                {
                    byte[] encryptedArray = Encoding.UTF8.GetBytes(content);
                    byte[] resultArray = cTransform.TransformFinalBlock(encryptedArray, 0, encryptedArray.Length);
                    return Convert.ToBase64String(resultArray);
                }
            }
        }

        public static string Decrypt(string content, string key)
        {
            key = key.PadRight(32, ' ');
            byte[] keyArray = Encoding.UTF8.GetBytes(key.Substring(0, 32));
            using (SymmetricAlgorithm des = Aes.Create())
            {
                des.Key = keyArray;
                des.Mode = CipherMode.CBC;
                des.Padding = PaddingMode.PKCS7;
                des.IV = Encoding.UTF8.GetBytes(key.Substring(0, 16));
                using (ICryptoTransform cTransform = des.CreateDecryptor())
                {
                    byte[] encryptedArray = Convert.FromBase64String(content);
                    byte[] resultArray = cTransform.TransformFinalBlock(encryptedArray, 0, encryptedArray.Length);
                    return Encoding.UTF8.GetString(resultArray);
                }
            }
        }
    }
}
