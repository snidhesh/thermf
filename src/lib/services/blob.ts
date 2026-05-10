import { put, del, list } from "@vercel/blob";

export async function uploadPrivateFile(file: File, pathname: string) {
  const blob = await put(pathname, file, {
    access: "private",
    addRandomSuffix: true,
  });
  return blob;
}

export async function uploadPublicFile(file: File, pathname: string) {
  const blob = await put(pathname, file, {
    access: "public",
    addRandomSuffix: true,
  });
  return blob;
}

export async function deleteFile(url: string) {
  await del(url);
}

export async function listFiles(prefix?: string) {
  const result = await list({ prefix });
  return result;
}
