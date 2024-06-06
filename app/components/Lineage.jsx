import { FlowAnalysisGraph } from '@ant-design/graphs';

export default function Lineage() {

  const config = {
    data: {
      nodes: [
        { id: "codes/a3", value: { title: "generate.py"}},
        { id: "artifacts/a4", value: { title: "input.cfg"}},
        { id: "a1", value: { title: "offline-tap" } },
        { id: "artifacts/a2", value: { title: "inputs1.cfg" } },
        { id: "artifacts/a20", value: { title: "inputs2.cfg" } },
        { id: "artifacts/a21", value: { title: "inputs3.cfg" } },
        { id: "artifacts/a22", value: { title: "inputs4.cfg" } },
        { id: "artifacts/a23", value: { title: "output.log" } },
        { id: "a30", value: { title: "sunny-strategy" } },
        { id: "a31", value: { title: "coplanar-oblique" } },
        { id: "a32", value: { title: "mode-lightship" } },
        { id: "a33", value: { title: "perfect-guide" } },
        { id: "artifacts/a40", value: { title: "out.1" } },
        { id: "artifacts/a41", value: { title: "out.2" } },
      ],
      edges: [
        { source: "a1", target: "artifacts/a2" },
        { source: "a1", target: "artifacts/a20" },
        { source: "a1", target: "artifacts/a21" },
        { source: "a1", target: "artifacts/a22" },
        { source: "a1", target: "artifacts/a23" },
        { source: "codes/a3", target: "a1"},
        { source: "artifacts/a4", target: "a1"},
        { source: "artifacts/a2", target: "a30" },
        { source: "artifacts/a20", target: "a31" },
        { source: "artifacts/a21", target: "a32" },
        { source: "artifacts/a22", target: "a33" },
        { source: "a30", target: "artifacts/a40"},
        { source: "a30", target: "artifacts/a41"},
      ],
    },
    nodeCfg: {
      badge: {
        style: (cfg) => {
          var fill = '#3498db';
          if (cfg.id.startsWith('artifacts')) {
            fill = '#1abc9c';
          } else if (cfg.id.startsWith('codes')) {
            fill = '#8e44ad';
          }

          return {
            fill,
            radius: [2, 0, 0, 2],
          };
        },
      },
      size: [100, 25],
      items: {
        containerStyle: {
          fill: '#fff',
        },
        padding: 6,
        style: (cfg, group, type) => {
          const styles = {
            icon: {
              width: 12,
              height: 12,
            },
            value: {
              fill: '#f00',
            },
            text: {
              fill: '#aaa',
            },
          };
          return styles[type];
        },
      },
      nodeStateStyles: {
        hover: {
          stroke: '#B2BED5',
          lineWidth: 2,
        },
      },
      title: {
        containerStyle: {
          fill: 'transparent',
        },
        style: {
          fill: '#000',
          fontSize: 10,
        },
      },
      style: {
        stroke: '#B2BED5',
        radius: [2, 2, 2, 2],
      },
    },
    height: 340,
    width: 660,
    edgeCfg: {
      label: {
        style: {
          fill: '#aaa',
          fontSize: 12,
          fillOpacity: 1,
        },
      },
      edgeStateStyles: {
        hover: {
          strokeOpacity: 1,
        },
      },
    },
    behaviors: ['zoom-canvas',],
  };

  return (
<div className="max-w-[85rem] px-4 py-4 sm:px-4 lg:px-4 lg:py-4 mx-auto">
  <div className="flex flex-col">
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="pb-4 pt-4 pl-4 pr-4">
            <FlowAnalysisGraph {...config} />
          </div>
      </div>
    </div>
  </div>
</div>
)
}
