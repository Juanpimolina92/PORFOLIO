"""Generate a closed 3D torus-knot mesh. Python standard library only."""
import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def center(t):
    radius = 1.15 + 0.42 * math.cos(3 * t)
    return (radius * math.cos(2 * t), radius * math.sin(2 * t), 0.42 * math.sin(3 * t))


def normalize(v):
    length = math.sqrt(sum(x * x for x in v))
    return tuple(x / length for x in v)


def cross(a, b):
    return (a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0])


def generate():
    segments, sides = 192, 20
    positions, indices = [], []
    for i in range(segments):
        t = math.tau * i / segments
        point = center(t)
        before, after = center(t - 0.001), center(t + 0.001)
        tangent = normalize(tuple(b-a for a, b in zip(before, after)))
        normal = normalize(cross(tangent, (0, 0, 1)))
        binormal = cross(tangent, normal)
        for j in range(sides):
            angle = math.tau * j / sides
            positions.extend(round(point[k] + 0.225 * (math.cos(angle) * normal[k] + math.sin(angle) * binormal[k]), 5) for k in range(3))
            a = i * sides + j
            b = ((i + 1) % segments) * sides + j
            c = ((i + 1) % segments) * sides + (j + 1) % sides
            d = i * sides + (j + 1) % sides
            indices.extend((a, d, b, b, d, c))
    assert len(positions) == segments * sides * 3
    assert max(indices) < len(positions) // 3
    output = ROOT / 'src' / 'generated' / 'hero-mesh.json'
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps({'positions': positions, 'indices': indices}, separators=(',', ':')), encoding='utf-8')
    print(f'Hero: {segments * sides} vertices, {len(indices) // 3} triangles -> {output.name}')


if __name__ == '__main__':
    generate()
