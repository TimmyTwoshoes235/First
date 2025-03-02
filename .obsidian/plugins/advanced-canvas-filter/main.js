/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => FilterPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
function isCanvasGroupData(node) {
  return (node == null ? void 0 : node.type) === "group";
}
function nodeBondingBoxContains(outerNode, innerNode) {
  return outerNode.x <= innerNode.x && outerNode.x + outerNode.width >= innerNode.x + innerNode.width && outerNode.y <= innerNode.y && outerNode.y + outerNode.height >= innerNode.y + innerNode.height;
}
function showOnlyNodes(canvas, opacity, idsToShow) {
  const nodes = canvas.nodes.values();
  for (const node of nodes) {
    if (idsToShow === void 0 || idsToShow.has(node.id)) {
      node.nodeEl.style.opacity = "";
    } else {
      node.nodeEl.style.opacity = opacity;
    }
  }
}
function showOnlyEdges(canvas, opacity, idsToShow) {
  const edges = canvas.edges.values();
  for (const edge of edges) {
    if (idsToShow === void 0 || idsToShow.has(edge.id)) {
      edge.lineGroupEl.style.opacity = "";
      edge.lineEndGroupEl.style.opacity = "";
    } else {
      edge.lineGroupEl.style.opacity = opacity;
      edge.lineEndGroupEl.style.opacity = opacity;
    }
  }
}
function getGroupsFor(allNodes, nonGroupNodes) {
  return allNodes.filter((x) => isCanvasGroupData(x) && nonGroupNodes.some((fn) => nodeBondingBoxContains(x, fn)));
}
function getEdgesWhereBothNodesInSet(allEdges, nodeIds) {
  return allEdges.filter((edge) => nodeIds.has(edge.fromNode) && nodeIds.has(edge.toNode));
}
function addUndefinedGroup(groupsDictionary, newArray) {
  const newGroupsDictionary = { ...groupsDictionary };
  if (newGroupsDictionary.hasOwnProperty("Other tags")) {
    delete newGroupsDictionary["Other tags"];
  }
  const undefinedGroup = newArray.filter((tag) => {
    for (const group in newGroupsDictionary) {
      if (newGroupsDictionary[group].includes(tag)) {
        return false;
      }
    }
    return true;
  });
  newGroupsDictionary["Other tags"] = undefinedGroup;
  return newGroupsDictionary;
}
function filterNodes(canvasData, tagsToShow, mode) {
  return canvasData.nodes.filter((node) => {
    var _a, _b;
    if (mode === "Any Tag Inclusion") {
      if (node.type === "file") {
        const metadata = this.app.metadataCache.getCache(node.file);
        return (_a = metadata == null ? void 0 : metadata.tags) == null ? void 0 : _a.some((x) => tagsToShow.includes(x.tag));
      } else if (node.type === "text") {
        return tagsToShow.some((t) => node.text.includes(t));
      } else {
        return false;
      }
    } else if (mode === "All Tags Inclusion") {
      if (node.type === "file") {
        const metadata = this.app.metadataCache.getCache(node.file);
        const nodeTags = (_b = metadata == null ? void 0 : metadata.tags) == null ? void 0 : _b.map((tag) => tag.tag);
        if (!nodeTags)
          return false;
        return tagsToShow.every((t) => nodeTags.includes(t));
      } else if (node.type === "text") {
        return tagsToShow.every((t) => node.text.includes(t));
      } else {
        return false;
      }
    } else {
      console.error("Invalid mode: " + mode);
      return false;
    }
  });
}
var DEFAULT_SETTINGS = {
  mySetting: "default",
  checkboxGroups: { "Group 1": ["#tag1", "#tag2", "#tag3"], "Group 2": ["#tag4", "#tag5", "#tag6"] },
  checkboxStates: {},
  jsonInput: '{"exampe group": ["#example_tag"]}',
  addOtherTagsGroup: false,
  HidenOpacity: "0.5",
  FilterMode: "All Tags Inclusion"
};
var FilterPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.onActiveLeafChange = async () => {
      const canvasView = this.app.workspace.getActiveViewOfType(import_obsidian.ItemView);
      if (!canvasView)
        return;
      if (canvasView.getViewType() === "canvas") {
        let activeCheckboxes = this.getActiveCheckboxes();
        this.showNodesByTags(activeCheckboxes);
      }
    };
    this.ifActiveViewIsCanvas = (commandFn) => (checking) => {
      const canvasView = this.app.workspace.getActiveViewOfType(import_obsidian.ItemView);
      if ((canvasView == null ? void 0 : canvasView.getViewType()) !== "canvas") {
        if (checking) {
          return false;
        }
        return;
      }
      if (checking) {
        return true;
      }
      const canvas = canvasView.canvas;
      if (!canvas) {
        return;
      }
      ;
      const canvasData = canvas.getData();
      if (!canvasData) {
        return;
      }
      ;
      return commandFn(canvas, canvasData);
    };
  }
  async onload() {
    await this.loadSettings();
    this.registerEvent(this.app.workspace.on("active-leaf-change", this.onActiveLeafChange));
    const ribbonIconEl = this.addRibbonIcon("filter", "Advanced Canvas Filter", (evt) => {
      new PlugInterface(this.app, this.settings, this.saveSettings.bind(this), this.getActiveCheckboxes.bind(this), this).open();
    });
    this.addSettingTab(new FilterSettingTab(this.app, this));
  }
  async showNodesByTags(tagsToShow) {
    await this.ifActiveViewIsCanvas(async (canvas, canvasData) => {
      showOnlyNodes(canvas, this.settings.HidenOpacity);
      showOnlyEdges(canvas, this.settings.HidenOpacity);
      const nodesToShow = filterNodes(canvasData, tagsToShow, this.settings.FilterMode);
      const groupsToShow = getGroupsFor(canvasData.nodes, nodesToShow);
      const nodeIdsToShow = new Set(nodesToShow.map((x) => x.id));
      const edgesToShow = getEdgesWhereBothNodesInSet(canvasData.edges, nodeIdsToShow);
      for (const group of groupsToShow) {
        nodeIdsToShow.add(group.id);
      }
      showOnlyNodes(canvas, this.settings.HidenOpacity, nodeIdsToShow);
      showOnlyEdges(canvas, this.settings.HidenOpacity, new Set(edgesToShow.map((x) => x.id)));
      if (tagsToShow.length === 0) {
        showOnlyNodes(canvas, this.settings.HidenOpacity);
        showOnlyEdges(canvas, this.settings.HidenOpacity);
      }
    })(false);
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  getActiveCheckboxes() {
    const activeCheckboxes = [];
    for (const name in this.settings.checkboxStates) {
      if (this.settings.checkboxStates.hasOwnProperty(name) && this.settings.checkboxStates[name]) {
        activeCheckboxes.push(name);
      }
    }
    return activeCheckboxes;
  }
};
var PlugInterface = class extends import_obsidian.Modal {
  constructor(app, settings, saveSettingsFunc, getActiveCheckboxesFunc, outerApp) {
    super(app);
    this.settings = settings;
    this.saveSettingsFunc = saveSettingsFunc;
    this.getActiveCheckboxesFunc = getActiveCheckboxesFunc;
    this.outerApp = outerApp;
  }
  async onOpen() {
    const { contentEl } = this;
    this.checkboxGroupsContainer = contentEl.createEl("div");
    this.checkboxGroupsContainer.addClass("checkbox-groups-container");
    const jsonInputContainer = contentEl.createEl("div");
    jsonInputContainer.createEl("h3", { text: "Json structure" });
    jsonInputContainer.addClass("json-input-container");
    const jsonInput = jsonInputContainer.createEl("textarea", { attr: { rows: "1" } });
    jsonInput.value = this.settings.jsonInput;
    jsonInput.placeholder = "Enter JSON for checkbox groups";
    const saveButton = contentEl.createEl("button");
    saveButton.addClass("mod-cta-json");
    saveButton.setText("Refresh groups");
    saveButton.onclick = () => {
      try {
        this.checkboxGroupsContainer.empty();
        const jsonData = JSON.parse(jsonInput.value);
        this.settings.checkboxGroups = jsonData;
        this.settings.jsonInput = jsonInput.value;
        this.saveSettingsFunc();
        new import_obsidian.Notice("JSON saved successfully");
        this.refreshCheckboxGroups();
      } catch (error) {
        new import_obsidian.Notice("Error parsing JSON");
        console.error(error);
      }
    };
    contentEl.appendChild(saveButton);
    const resetButton = contentEl.createEl("button");
    resetButton.addClass("mod-cta-reset");
    resetButton.setText("Reset");
    resetButton.onclick = () => {
      this.settings.checkboxStates = {};
      this.saveSettingsFunc();
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        if (checkbox instanceof HTMLInputElement) {
          checkbox.checked = false;
        }
      });
    };
    contentEl.appendChild(resetButton);
    this.refreshCheckboxGroups();
  }
  refreshCheckboxGroups() {
    if (!this.checkboxGroupsContainer)
      return;
    if (this.settings.addOtherTagsGroup) {
      this.settings.checkboxGroups = addUndefinedGroup(this.settings.checkboxGroups, this.getUniqueTags());
    } else {
      if (this.settings.checkboxGroups.hasOwnProperty("Other tags")) {
        delete this.settings.checkboxGroups["Other tags"];
      }
    }
    Object.keys(this.settings.checkboxGroups).forEach((groupName) => {
      const groupContainer = this.checkboxGroupsContainer.createEl("div");
      groupContainer.createEl("h3", { text: groupName });
      this.settings.checkboxGroups[groupName].forEach((tag) => this.createCheckbox(groupContainer, tag));
    });
  }
  createCheckbox(container, name) {
    var _a;
    const checkbox = container.createEl("label");
    checkbox.setText(name);
    const checkboxInput = checkbox.createEl("input");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.checked = (_a = this.settings.checkboxStates[name]) != null ? _a : false;
    checkboxInput.onchange = () => {
      this.settings.checkboxStates[name] = checkboxInput.checked;
      this.saveSettingsFunc();
    };
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
    let s = this.getActiveCheckboxesFunc();
    this.outerApp.showNodesByTags(s);
  }
  getUniqueTags() {
    const canvasView = this.app.workspace.getActiveViewOfType(import_obsidian.ItemView);
    if ((canvasView == null ? void 0 : canvasView.getViewType()) !== "canvas") {
      return [];
    }
    const canvasData = canvasView.canvas.getData();
    if (!canvasData) {
      return [];
    }
    const tags = /* @__PURE__ */ new Set();
    canvasData.nodes.forEach((node) => {
      if (node.type === "text") {
        const textTags = node.text.match(/#[^\s]+/g);
        if (textTags) {
          textTags.forEach((tag) => tags.add(tag));
        }
      } else if (node.type === "file") {
        const metadata = this.app.metadataCache.getCache(node.file);
        if (metadata && metadata.tags) {
          metadata.tags.forEach((tag) => tags.add(tag.tag));
        }
      }
    });
    return Array.from(tags);
  }
};
var FilterSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName('Add "Other tags" group').setDesc('Select this check box to add the "Other Tags" group. This group will contain tags that are not included in other groups.').addToggle((toggle) => toggle.setValue(this.plugin.settings.addOtherTagsGroup).onChange(async (value) => {
      this.plugin.settings.addOtherTagsGroup = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Hidden opacity").setDesc("Adjust the opacity level for hidden elements. Value must been between 0 and 1").addText((text) => text.setValue(this.plugin.settings.HidenOpacity).onChange(async (value) => {
      const parsedValue = parseFloat(value);
      const newValue = Math.max(0, Math.min(parsedValue, 1));
      this.plugin.settings.HidenOpacity = newValue.toString();
      await this.plugin.saveSettings();
    }).setPlaceholder("between 0 and 1"));
    new import_obsidian.Setting(containerEl).setName("Filter mode").setDesc('"Any Tag Inclusion" means that nodes will be shown if they contain at least one of the selected tags. "All Tags Inclusion" means that nodes will only be shown if they contain all of the selected tags.').addDropdown((dropdown) => dropdown.addOption("All Tags Inclusion", "All Tags Inclusion").addOption("Any Tag Inclusion", "Any Tag Inclusion").setValue(this.plugin.settings.FilterMode).onChange(async (value) => {
      this.plugin.settings.FilterMode = value;
      await this.plugin.saveSettings();
    }));
  }
};


/* nosourcemap */