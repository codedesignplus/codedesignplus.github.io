// src/plugins/remark-github-code.js
import { visit } from 'unist-util-visit';
import fetch from 'node-fetch';

export default function remarkGitHubCode() {
  return async (tree) => {
    const promises = [];

    visit(tree, 'code', (node) => { 
      const { meta } = node;

      const urls = {
        "Sdk": 'https://raw.githubusercontent.com/codedesignplus/CodeDesignPlus.Net.Sdk/refs/heads/main',
        "Archetype": 'https://raw.githubusercontent.com/codedesignplus/CodeDesignPlus.Net.Microservice/refs/heads/main',
        "DevEnv": 'https://raw.githubusercontent.com/codedesignplus/CodeDesignPlus.Environment.Dev/refs/heads/main',
        "ms-suscription": 'https://raw.githubusercontent.com/codedesignplus/Acme.Net.Microservice.Subscriptions/refs/heads/main',
        "ms-clients": 'https://raw.githubusercontent.com/codedesignplus/Acme.Net.Microservice.Clients/refs/heads/main',
      }

      let urlRepository = urls.Sdk;

      if (meta && meta.includes('repository')) {

        const repositoryMatch = meta.match(/repository="([^"]+)"/);
        const repository = repositoryMatch ? repositoryMatch[1] : null;

        urlRepository = urls[repository];
      }

      if (meta && meta.includes('url=')) {
        // Extraer la URL del archivo
        const urlMatch = meta.match(/url="([^"]+)"/);
        const url = urlMatch ? urlMatch[1] : null;

        if (url) {
          // Realizar la solicitud HTTP para cargar el contenido del archivo
          const fetchCode = fetch(`${urlRepository}/${url}`)
            .then((response) => response.text())
            .then((code) => {
              // Reemplazar el contenido del bloque de código con el código cargado
              node.value = code;
            })
            .catch((error) => {
              node.value = `Error cargando el archivo: ${error.message}`;
            });

          promises.push(fetchCode);
        }
      }
    });

    // Esperar a que todas las solicitudes se completen
    await Promise.all(promises);
  };
}
