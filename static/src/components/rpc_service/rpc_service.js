/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";
import { useService } from "@web/core/utils/hooks";

import { Component, useSubEnv, useState } from "@odoo/owl";

export class RpcService extends Component {
  setup() {
    useSubEnv({
      config: {
        ...getDefaultConfig(),
        ...this.env.config,
      },
    });
    this.state = useState({ partners: [] });
    this.rpc = useService("rpc");
  }

  async getRpcService() {
    const data = await this.rpc("/owl/rpc_service", { limit: 6 });
    this.state.partners = data;
  }
}

RpcService.template = "owl.RpcService";
RpcService.components = { Layout };

registry.category("actions").add("owl.RpcService", RpcService);
